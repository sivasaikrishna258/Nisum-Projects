package com.countries.POJOClasses.countryPOJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Map;
@JsonIgnoreProperties(ignoreUnknown = true)

public class Gini {
    private Map<Integer, Double> giniValues;

    public Map<Integer, Double> getGiniValues() {
        return giniValues;
    }

    public void setGiniValues(Map<Integer, Double> giniValues) {
        this.giniValues = giniValues;
    }
}