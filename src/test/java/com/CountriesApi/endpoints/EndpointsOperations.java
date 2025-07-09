package com.CountriesApi.endpoints;

import io.restassured.response.Response;

import java.util.HashMap;
import java.util.Map;

public class EndpointsOperations {
    /**
     * this class @return response given from @ServiceRequest class
     */
    public static String host=APIBaseURI.USERS.getUrl();


    public static Response getAllCountries() {
        String pathParam="all";
         return ServiceRequest.getAllCountriesWithBelowPArameters(host,pathParam);
    }

    public static Response getCountriesByGivenName(String countryName) {

        Map<String ,Object> pathParam=new HashMap<>();
        pathParam.put("All","name");
        pathParam.put("Country",countryName);

        return ServiceRequest.getTheCountriesWithName(host,pathParam);
    }

    public static Response getCountriesByGivenFullName(String countryName) {
        Map<String ,Object> pathParam=new HashMap<>();
        pathParam.put("CountryName","name");
        pathParam.put("Country",countryName);
        String queryParam="true";

        return ServiceRequest.getTheCountriesWithFullName(host,pathParam,queryParam);
    }

    public static Response getCountriesByGivenLanguage(String language) {
        Map<String ,Object> pathParam=new HashMap<>();
        pathParam.put("Language","lang");
        pathParam.put("CountryLanguage",language);
        return ServiceRequest.getTheCountriesWithLanguage(host,pathParam);

    }
}
