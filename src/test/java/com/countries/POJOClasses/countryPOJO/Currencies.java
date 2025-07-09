package com.countries.POJOClasses.countryPOJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class Currencies {
    private Currency INR;
    private Currency USD;

    public Currency getINR() {
        return INR;
    }

    public Currency getUSD() {
        return USD;
    }

    // Getters and Setters
}