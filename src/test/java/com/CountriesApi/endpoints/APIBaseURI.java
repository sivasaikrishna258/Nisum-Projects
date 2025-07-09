package com.CountriesApi.endpoints;

public enum APIBaseURI {

    USERS("https://restcountries.com/v3.1");

    private final String url;

    APIBaseURI(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }
}
