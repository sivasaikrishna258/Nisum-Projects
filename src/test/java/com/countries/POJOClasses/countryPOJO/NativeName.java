package com.countries.POJOClasses.countryPOJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class NativeName {


    private Eng eng;
    // Getters and Setters


    public Eng getEng() {
        return eng;
    }

    public void setEng(Eng eng) {
        this.eng = eng;
    }
}