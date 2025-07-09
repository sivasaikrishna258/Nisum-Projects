package com.GoRestApi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class Put {

    @Test
    public void updateTest() throws JsonProcessingException {

//
        POJO pojo = new POJO();
        pojo.setEmail("k8@gmial");
        pojo.setName("sivasai");
        pojo.setStatus("active");
        pojo.setGender("male");
        ObjectMapper oj = new ObjectMapper();
        String s = oj.writeValueAsString(pojo);


        Response response = given().queryParam("access-token", "1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2").log().all()
                .body(s)
                .contentType(ContentType.JSON)
                .when().put("https://gorest.co.in/public/v2/users/7165438")
                .then().extract().response();
        response.then().log().all();
//
        Assert.assertEquals(response.getStatusCode(),200);
        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 200 OK");

        Assert.assertEquals(response.jsonPath().get("name"),"siva");


    }
}
