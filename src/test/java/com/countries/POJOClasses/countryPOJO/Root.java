package com.countries.POJOClasses.countryPOJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.*;
@JsonIgnoreProperties(ignoreUnknown = true)

public class Root {
    private Name name;
    private List<String> tld = new ArrayList<String>();
    private String cca2;
    private String ccn3;
    private String cioc;
    private Boolean independent;
    private String status;
    private Boolean unMember;
    private Currencies currencies;
    private Idd idd;
    private List<String> capital = new ArrayList<String>();
    private List<String> altSpellings = new ArrayList<String>();
    private String region;
    private String subregion;
    private Languages languages;
    private List<Integer> latlng = new ArrayList<Integer>();
    private Boolean landlocked;
    private List<String> borders = new ArrayList<String>();
    private Integer area;
    private Demonyms demonyms;
    private String cca3;
    private Translations translations;
    private String flag;
    private Maps maps;
    private Integer population;
    private Gini gini;
    private String fifa;
    private Car car;
    private List<String> timezones = new ArrayList<String>();
    private List<String> continents = new ArrayList<String>();
    private Flags flags;
    private CoatOfArms coatOfArms;
    private String startOfWeek;
    private CapitalInfo capitalInfo;
    private PostalCode postalCode;
    public Name getName() {
        return name;
    }
    public void setName(Name name) {
        this.name = name;
    }
    public List<String> getTld() {
        return tld;
    }
    public void setTld(List<String> tld) {
        this.tld = tld;
    }
    public String getCca2() {
        return cca2;
    }
    public void setCca2(String cca2) {
        this.cca2 = cca2;
    }
    public String getCcn3() {
        return ccn3;
    }
    public void setCcn3(String ccn3) {
        this.ccn3 = ccn3;
    }
    public String getCioc() {
        return cioc;
    }
    public void setCioc(String cioc) {
        this.cioc = cioc;
    }
    public Boolean getIndependent() {
        return independent;
    }
    public void setIndependent(Boolean independent) {
        this.independent = independent;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Boolean getUnMember() {
        return unMember;
    }
    public void setUnMember(Boolean unMember) {
        this.unMember = unMember;
    }
    public Currencies getCurrencies() {
        return currencies;
    }
    public void setCurrencies(Currencies currencies) {
        this.currencies = currencies;
    }
    public Idd getIdd() {
        return idd;
    }
    public void setIdd(Idd idd) {
        this.idd = idd;
    }
    public List<String> getCapital() {
        return capital;
    }
    public void setCapital(List<String> capital) {
        this.capital = capital;
    }
    public List<String> getAltSpellings() {
        return altSpellings;
    }
    public void setAltSpellings(List<String> altSpellings) {
        this.altSpellings = altSpellings;
    }
    public String getRegion() {
        return region;
    }
    public void setRegion(String region) {
        this.region = region;
    }
    public String getSubregion() {
        return subregion;
    }
    public void setSubregion(String subregion) {
        this.subregion = subregion;
    }
    public Languages getLanguages() {
        return languages;
    }
    public void setLanguages(Languages languages) {
        this.languages = languages;
    }
    public List<Integer> getLatlng() {
        return latlng;
    }
    public void setLatlng(List<Integer> latlng) {
        this.latlng = latlng;
    }
    public Boolean getLandlocked() {
        return landlocked;
    }
    public void setLandlocked(Boolean landlocked) {
        this.landlocked = landlocked;
    }
    public List<String> getBorders() {
        return borders;
    }
    public void setBorders(List<String> borders) {
        this.borders = borders;
    }
    public Integer getArea() {
        return area;
    }
    public void setArea(Integer area) {
        this.area = area;
    }
    public Demonyms getDemonyms() {
        return demonyms;
    }
    public void setDemonyms(Demonyms demonyms) {
        this.demonyms = demonyms;
    }
    public String getCca3() {
        return cca3;
    }
    public void setCca3(String cca3) {
        this.cca3 = cca3;
    }
    public Translations getTranslations() {
        return translations;
    }
    public void setTranslations(Translations translations) {
        this.translations = translations;
    }
    public String getFlag() {
        return flag;
    }
    public void setFlag(String flag) {
        this.flag = flag;
    }
    public Maps getMaps() {
        return maps;
    }
    public void setMaps(Maps maps) {
        this.maps = maps;
    }
    public Integer getPopulation() {
        return population;
    }
    public void setPopulation(Integer population) {
        this.population = population;
    }
    public Gini getGini() {
        return gini;
    }
    public void setGini(Gini gini) {
        this.gini = gini;
    }
    public String getFifa() {
        return fifa;
    }
    public void setFifa(String fifa) {
        this.fifa = fifa;
    }
    public Car getCar() {
        return car;
    }
    public void setCar(Car car) {
        this.car = car;
    }
    public List<String> getTimezones() {
        return timezones;
    }
    public void setTimezones(List<String> timezones) {
        this.timezones = timezones;
    }
    public List<String> getContinents() {
        return continents;
    }
    public void setContinents(List<String> continents) {
        this.continents = continents;
    }
    public Flags getFlags() {
        return flags;
    }
    public void setFlags(Flags flags) {
        this.flags = flags;
    }
    public CoatOfArms getCoatOfArms() {
        return coatOfArms;
    }
    public void setCoatOfArms(CoatOfArms coatOfArms) {
        this.coatOfArms = coatOfArms;
    }
    public String getStartOfWeek() {
        return startOfWeek;
    }
    public void setStartOfWeek(String startOfWeek) {
        this.startOfWeek = startOfWeek;
    }
    public CapitalInfo getCapitalInfo() {
        return capitalInfo;
    }
    public void setCapitalInfo(CapitalInfo capitalInfo) {
        this.capitalInfo = capitalInfo;
    }
    public PostalCode getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(PostalCode postalCode) {
        this.postalCode = postalCode;
    }

}
