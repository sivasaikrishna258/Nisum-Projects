package com.GoRestApi;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class ServiceRequestMethods {
    public static Response createUserWithGivenDetails(String host, String pathParam, String queryParam, String s) {

        Response response= given()
                .contentType(ContentType.JSON)
                .baseUri(host)
                .pathParams("User",pathParam)
                .queryParam("access-token",queryParam)
                .body(s)
                .then().log().all()
                .when().post("{User}")
                .then().extract().response();

        return response;
    }

    public static Response updateUserWithGivenDetails(String host, String pathParam, String queryParam, String s,String id) {

        Response response= given().log().all()
                .contentType(ContentType.JSON)
                .baseUri(host)
                .pathParam("User",pathParam)
                .pathParam("UserId",id)
                .queryParam("access-token",queryParam)
                .body(s)
                .then().log().all()
                .when().put("{User}/{UserId}")
                .then().extract().response();

        return response;
    }
}
