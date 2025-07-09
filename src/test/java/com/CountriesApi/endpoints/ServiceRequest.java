package com.CountriesApi.endpoints;

import static io.restassured.RestAssured.*;

import io.restassured.response.Response;

import java.util.Map;

public class ServiceRequest {



    public static Response getAllCountriesWithBelowPArameters(String host, String pathParam) {
        Response response=given()
                .baseUri(host)
                .log().all()
                .when().get(pathParam)
                .then().extract().response();

        return response;
    }

    public static Response getTheCountriesWithName(String host, Map<String, Object> pathParam) {
        Response response = given()
                .baseUri(host)
                .pathParams(pathParam)
                               .log().all() // Log the details of the request for debugging
                .when().get("{All}/{Country}") // Specify the get request with placeholders for path parameters
                .then().extract().response(); // Extract the response from the request

        return response; // Return the response object
    }

    public static Response getTheCountriesWithFullName(String host, Map<String, Object> pathParam, String queryParam) {
        Response response = given()
                .baseUri(host) // Set the base URI for the request
                .pathParams(pathParam)
                .queryParam("fullText",queryParam)// Set path parameters for the request
                .log().all() // Log the details of the request for debugging
                .when().get("{CountryName}/{Country}") // Specify the get request with placeholders for path parameters
                .then().extract().response(); // Extract the response from the request

        return response; // Return the response object
    }

    public static Response getTheCountriesWithLanguage(String host, Map<String, Object> pathParam) {
        Response response = given()
                .baseUri(host) // Set the base URI for the request
                .pathParams(pathParam)
                .log().all() // Log the details of the request for debugging
                .when().get("{Language}/{CountryLanguage}") // Specify the get request with placeholders for path parameters
                .then().extract().response(); // Extract the response from the request

        return response;
    }
}
