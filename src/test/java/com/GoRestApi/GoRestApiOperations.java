package com.GoRestApi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.json.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class GoRestApiOperations {
    int id;
    @Test(priority = 0)
    public void postTest() throws JsonProcessingException {

        POJO pojo=new POJO();
        pojo.setEmail("k111@gmial");
        pojo.setName("siva");
        pojo.setStatus("active");
        pojo.setGender("male");
        ObjectMapper oj=new ObjectMapper();
        String s = oj.writeValueAsString(pojo);
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("name","siva");
        jsonObject.put("email","saikrishna5646@gmail.com");
        jsonObject.put("gender","male");
        jsonObject.put("status","inactive");

       Response response= given().queryParam("access-token","1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2")
                .log().all()
                .contentType(ContentType.JSON)
                .body(jsonObject.toString())
                .when().post("https://gorest.co.in/public/v2/users")
                .then().extract().response();

response.then().log().all();
        Assert.assertEquals(response.getStatusCode(),201);
        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 201 Created");
        Assert.assertEquals(response.jsonPath().get("name"),"siva");

         id=response.jsonPath().get("id");
    }

    @Test(priority = 1)
    public void updateTest() throws JsonProcessingException {

//
        POJO pojo = new POJO();
        pojo.setEmail("k813@gmial");
        pojo.setName("sivasaikri");
        pojo.setStatus("active");
        pojo.setGender("male");
        ObjectMapper oj = new ObjectMapper();
        String s = oj.writeValueAsString(pojo);


        Response response = given().pathParams("Id",id).queryParam("access-token", "1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2").log().all()
                .body(s)
                .contentType(ContentType.JSON)

                .when().put("https://gorest.co.in/public/v2/users/{Id}")
                .then().extract().response();
        response.then().log().all();
//
        Assert.assertEquals(response.getStatusCode(),200);
        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 200 OK");

//        Assert.assertEquals(response.jsonPath().get("name"),"sivasai");


    }

    @Test(priority = 2)
    public void deleteTest(){
        Response response=given().pathParams("Id",id).queryParam("access-token","1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2")
                .log().all()
                .queryParam("page","2")
                .when().delete("https://gorest.co.in/public/v2/users/{Id}")
                .then().extract().response();

        Assert.assertEquals(response.getStatusCode(),204);
        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 204 No Content");
    }
}
