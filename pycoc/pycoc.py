from __future__ import unicode_literals

import sys

import json
import logging

if sys.version_info.major == 2:
    from urllib import urlencode
    from urllib2 import HTTPError, Request, urlopen
else:
    from urllib.parse import urlencode
    from urllib.error import HTTPError
    from urllib.request import Request, urlopen


class COCApi:
    def __init__(self, token, timeout=20):
        """
        Initialising requisites

        :type token: str
        :type timeout: int
        """
        self.token = token
        self.ENDPOINT = "https://api.clashofclans.com/v1"
        self.timeout = timeout
        self.headers = {
            "authorization": "Bearer %s" % token,
            "Accept": "application/json",
        }
        self.DEFAULT_PARAMS = ("limit", "after", "before")
        self.ERROR_INVALID_PARAM = {
            "result": "error",
            "message": "Invalid params for method",
        }

    def check_if_dict_invalid(self, params, valid_items=()):
        """
        :type params: Dict
        :type valid_items: Tuple
        :rtype bool
        """
        if not valid_items:
            valid_items = self.DEFAULT_PARAMS
        return set(params.keys()).issubset(valid_items)

    def api_response(self, uri, params=None):
        """
        Function to handle requests,it is possible to use this handler on it's
        own to make request to the api on in case of a new or unsupported api
        Args:
            uri      -> The endpoint uri that needs to be called for the specific function
            params  ionary of supported params to be filtered
                        with Refer https://developer.clashofclans.com/#/documentation
        Return:
            The json response from the api as is or returns error if broken

        :type uri: str|unicode
        :type params: Dict
        :rtype Dict
        """

        if params is None:
            params = {}
        url = self.ENDPOINT + uri + "?" + urlencode(params)  # type: ignore
        try:
            try:
                req = Request(url, headers=self.headers)
                rsp = urlopen(req, timeout=self.timeout)
                content = json.load(rsp)
                rsp.close()
                return dict(content)
            except HTTPError as e:
                return json.load(e)
        except Exception as e:
            logging.exception(e)
            return {"result": "error", "message": "Something broke"}

    def test(self):
        """
        Function to test if the api is up and running.
            Dictionary with a success if api is up error if false

        :rtype Dict
        """
        req = Request(self.ENDPOINT, headers=self.headers)
        rsp = urlopen(req, timeout=self.timeout)
        rsp.close()
        if rsp.status_code == 200:
            return {"result": "success", "message": "Api is up and running!"}
        else:
            return {"result": "error", "message": "Api is Down!"}

    def clan(self, params=None):
        """
        Function to Search all clans by name and/or filtering the results using various criteria.
        At least one filtering criteria must be defined and if name is used as part of search, it
        is required to be at least three characters long.It is not possible to specify ordering for
        results so clients should not rely on any specific ordering as that may change in the
        future releases of the API.

        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        valid_items = tuple(
            [
                "name",
                "warFrequency",
                "locationId",
                "minMembers",
                "maxMembers",
                "minClanPoints",
                "minClanLevel",
                "labelIds",
            ]
            + list(self.DEFAULT_PARAMS)
        )
        if not self.check_if_dict_invalid(params=params, valid_items=valid_items):
            return self.ERROR_INVALID_PARAM
        uri = "/clans"
        return self.api_response(uri=uri, params=params)

    def clan_tag(self, tag):
        """
        Function to Get information about a single clan by clan tag.
        Clan tags can be found using clan search operation.

        :type tag: str
        :rtype Dict
        """
        uri = "/clans/%23" + tag[1:]
        return self.api_response(uri=uri)

    def clan_members(self, tag, params=None):
        """
        Function to List clan members

        :type tag: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/clans/%23" + tag[1:] + "/members"
        return self.api_response(uri=uri, params=params)

    def clan_war_log(self, tag, params=None):
        """
        Function to Retrieve clan's clan war log
        
        :type tag: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/clans/%23" + tag[1:] + "/warlog"
        return self.api_response(uri=uri, params=params)

    def clan_current_war(self, tag):
        """
        Function to Retrieve information about clan's current clan war
        
        :type tag: str
        :rtype Dict
        """
        uri = "/clans/%23" + tag[1:] + "/currentwar"
        return self.api_response(uri=uri)

    def clan_leaguegroup(self, tag):
        """
        Function to Retrieve information about clan's current clan war league group
        
        :type tag: str
        :rtype Dict
        """
        uri = "/clans/%23" + tag[1:] + "/currentwar/leaguegroup"
        return self.api_response(uri=uri)

    def warleague(self, sid):
        """
        Function to Retrieve information about a clan war league war.
        
        :type sid: str
        :rtype Dict
        """
        uri = "/clanwarleagues/wars/" + str(sid)
        return self.api_response(uri=uri)

    def players(self, tag):
        """
        Function to Get information about a single player by player tag.
        Player tags can be found either in game or by from clan member lists.
        
        :type tag: str
        :rtype Dict
        """
        uri = "/players/%23" + tag[1:]
        return self.api_response(uri=uri)

    def location(self, params=None):
        """
        Function List all available locations
        
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/locations"
        return self.api_response(uri=uri, params=params)

    def location_id(self, loc_id):
        """
        Function to Get information about specific location
        
        :type loc_id: str
        :rtype Dict
        """
        uri = "/locations/" + str(loc_id)
        return self.api_response(uri=uri)

    def location_id_clan_rank(self, loc_id, params=None):
        """
        Function to Get clan rankings for a specific location
        
        :type loc_id: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/locations/" + str(loc_id) + "/rankings/clans"
        return self.api_response(uri=uri, params=params)

    def location_id_player_rank(self, loc_id, params=None):
        """
        Function to Get player rankings for a specific location
        
        :type loc_id: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/locations/" + str(loc_id) + "/rankings/players"
        return self.api_response(uri=uri, params=params)

    def location_clan_versus(self, loc_id, params=None):
        """
        Function to Get clan versus rankings for a specific location
        
        :type loc_id: str
        :type params: Dict
        :rtype Dict
        """

        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/locations/" + str(loc_id) + "/rankings/clans-versus"
        return self.api_response(uri=uri, params=params)

    def location_player_versus(self, loc_id, params=None):
        """
        Function to Get player versus rankings for a specific location
        
        :type loc_id: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/locations/" + str(loc_id) + "/rankings/players-versus"
        return self.api_response(uri=uri, params=params)

    def league(self, params=None):
        """
        Function to Get list of leagues
        
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/leagues"
        return self.api_response(uri=uri, params=params)

    def league_id(self, lid):
        """
        Function to Get league information
        
        :type lid: str
        :rtype Dict
        """
        uri = "/leagues/" + str(lid)
        return self.api_response(uri=uri)

    def league_season(self, lid, params=None):
        """
        Function to Get league seasons. Note that league season information is available only for Legend League.
        
        :type lid: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/leagues/" + str(lid) + "/seasons"
        return self.api_response(uri=uri, params=params)

    def league_season_id(self, lid, sid, params=None):
        """
        Function to Get league season rankings.
        Note that league season information is available only for Legend League.
        
        :type lid: str
        :type sid: str
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/leagues/" + str(lid) + "/seasons/" + str(sid)
        return self.api_response(uri=uri, params=params)

    def labels_clans(self, params=None):
        """
        Function to Get labels for a clan
        
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/labels/clans"
        return self.api_response(uri=uri, params=params)

    def labels_players(self, params=None):
        """
        Function to Get labels for a player
        
        :type params: Dict
        :rtype Dict
        """
        if params is None:
            params = {}
        if not self.check_if_dict_invalid(params=params):
            return self.ERROR_INVALID_PARAM
        uri = "/labels/players/"
        return self.api_response(uri=uri, params=params)
