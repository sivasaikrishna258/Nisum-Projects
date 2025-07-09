package com.countries;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

;

public class RequestSetup {

    String host = "https://restcountries.com/v3.1/";
    String getByName = "/name/{name}";
    String getByFullName = "/name/{name}?fullText=true";
    String getByCode = "/alpha/{code}";
    String getByCodeList = "/alpha";

    String getByRegion = "/region/{region}";

    RestAssured restAssured;

    //this is the one way
    public io.restassured.specification.RequestSpecification requestSpec(String name){
        return given()
                .pathParam("name", name)
                .baseUri(host)
                .basePath(getByName)
                .log().all();
    }

    //another way is

    RequestSpecification requestSpec = new RequestSpecBuilder()
            .setBaseUri("https://reqres.in")
            .setBasePath("/api")
            .addHeader("Content-Type", "application/json")
            .addHeader("Authorization", "Bearer your_token_here")
            .build();

    // Using it
    public void get(){
        given()
                .spec(requestSpec)
                .body("{ \"name\": \"morpheus\", \"job\": \"leader\" }")
                .when()
                .post("/users")
                .then()
                .statusCode(201);
    }

/**************************************************************************************************************************/
    public Response getCountryByName(String name) {
        return given()
                .spec(requestSpec(name))
//                .pathParam("name", name)
//                .baseUri(getBaseUri())
//                .basePath(getByName)
//                .log().all()
                .when()
                .get();
    }

    public Response getCountryByFullName(String name) {
        return given()
                .pathParam("name", name)
                .queryParam("fullText", true)
                .baseUri(getBaseUri())
                .basePath(getByFullName)
                .log().all()
                .when()
                .get();
    }

    public Response getCountryBySingleCode(String code) {
        return given()
                .pathParam("region", code)
                .baseUri(getBaseUri())
                .basePath(getByRegion)
                .log().all()
                .when()
                .get();
    }


    public Response getCountryByRegion(String region) {
        return given()
                .pathParam("region", region)
                .baseUri(getBaseUri())
                .basePath(getByRegion)

                .log().all()
                .when()
                .get();
    }
    private String getBaseUri() {

        return host;
    }
}

//    public Response getCountryByMultipleCode(List<String> codes) {
////        String codesInput =
//        return given()
//                .header(getHeader1())
//                .headers(getHeaders())
//                .queryParam("code", codes)
//                .baseUri(getBaseUri())
//                .basePath(getByCodeList)
//                .log().all()
//                .when()
//                .get();
//    }
//
//    private Header getHeader1() {
//        Header header1 = new Header("accept", "json");
//        return header1;
//    }
//
//    private Header getHeader2() {
//        Header header1 = new Header("accept", "json");
//        return header1;
////    }
//
//    private Header getHeader3() {
//        Header header1 = new Header("accept", "json");
//        return header1;
//    }

//    private Headers getHeaders() {
//        Headers headers = new Headers(getHeaders(), getHeader2(), getHeader3())
//
//        return headers;
//    }
//
//}
