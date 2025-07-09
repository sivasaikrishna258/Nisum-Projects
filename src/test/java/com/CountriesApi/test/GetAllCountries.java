package com.CountriesApi.test;

import com.CountriesApi.POJOClasses.Name1;
import com.CountriesApi.POJOClasses.Root;
import com.CountriesApi.endpoints.EndpointsOperations;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class GetAllCountries {


    @Test
    public void getCountries() throws IOException {

        Response response = EndpointsOperations.getAllCountries();
//        response.then().log().body();

        ObjectMapper oj = new ObjectMapper();
        JsonNode jsonNode = oj.readTree(response.getBody().asString());
        JsonNode a = jsonNode.get(0);


//        System.out.println(a.get("name").get("common"));
//        System.out.println(a.get("fin.common").asText());

        Assert.assertEquals(response.getStatusCode(), 200);
        Assert.assertEquals(response.getStatusLine(), "HTTP/1.1 200 OK");

//        Assert.assertEquals(response.jsonPath().get("name"),"siva");


    }

    @Test
    public void getCountriesByName() throws IOException {
        Response response = EndpointsOperations.getCountriesByGivenName("india");
//        response.then().log().body();
        ObjectMapper oj = new ObjectMapper();
        JsonNode jsonNode = oj.readTree(response.getBody().asString());

//        List<Testclass> pAyloadsSample =  new ArrayList<>();
//        Testclass pAyloadsSample = oj.readValue(response.getBody().asString(), Testclass.class);
//
        PAyloadsSample[] pAyloadsSample = oj.readValue(response.getBody().asString(), PAyloadsSample[].class);
//        System.out.println("****************************************");
//        System.out.println(Arrays.toString(pAyloadsSample).toString());
//        System.out.println("****************************************");
//        System.out.println(pAyloadsSample[0].getName().getCommon());
//        System.out.println(pAyloadsSample.getpAyloadsSampleList().get(0).getName());
//        JsonNode a = jsonNode.get(0);
//        System.out.println(a.get("region"));
//        //@[0].translations.bre.common
//        System.out.println(a.path("translations").path("bre").get("official"));
        Assert.assertEquals(response.getStatusCode(), 200);
        Assert.assertEquals(response.getStatusLine(), "HTTP/1.1 200 OK");
        Assert.assertEquals("India", pAyloadsSample[0].getName().getCommon());

    }

    @Test
    public void getCountriesByFullName() throws IOException {
        Response response = EndpointsOperations.getCountriesByGivenFullName("india");
//        response.then().log().all();
        ObjectMapper oj = new ObjectMapper();
        JsonNode jsonNode = oj.readTree(response.getBody().asString());
        String a = jsonNode.get(0).asText();
        System.out.println(response.jsonPath().getString("[0].name.common"));

        System.out.println(response.jsonPath().getString("[0].name.nativeName.eng.official"));
//        System.out.println(a.path("name").get("common"));
//        System.out.println(jsonNode.get(0).get("cca2"));
//        Assert.assertEquals(response.getStatusCode(),200);
//        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 200 OK");
//        Assert.assertEquals("Republic of India",a.get("name").get("official"));


    }

    @Test
    public void getCountriesByLanguage() throws IOException {
        Response response = EndpointsOperations.getCountriesByGivenLanguage("spanish");
        response.then().log().body();

        ObjectMapper objectMapper = new ObjectMapper();

        List<Root> employeeResponse = objectMapper.readValue(response.asString(), objectMapper.getTypeFactory().constructCollectionType(List.class, Root.class));

        System.out.println(employeeResponse.get(0).getName().getCommon());
        Assert.assertEquals("Colombia", employeeResponse.get(0).getName().getCommon());
    }


//        ObjectMapper oj=new ObjectMapper();
//        JsonNode jsonNode = oj.readTree(response.getBody().asString());
//        JsonNode a = jsonNode.get(7);
//        System.out.println(a.get("cca2"));
//
//        System.out.println(jsonNode.at("/7/name").get("common").asText());
//        System.out.println(response.jsonPath().get("[7].name.common").toString());
////        System.out.println(a.path("name").get("common"));
//        Assert.assertEquals(response.getStatusCode(),200);
//        Assert.assertEquals(response.getStatusLine(),"HTTP/1.1 200 OK");

}


//}
