package com.GoRestApi;

import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class Delete {

    @Test
    public void deleteTest(){
        Response response=given().queryParam("access-token","1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2")
                .log().all()
                .queryParam("page","2")
                .when().delete("https://gorest.co.in/public/v2/users/7219068")
                .then().extract().response();

        Assert.assertEquals(response.getStatusCode(),204);
        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 204 No Content");
    }
}
