package com.example.oblig2javascript;

public class Bilett {
    private String fornavn;
    private String etternavn;
    private String epost;
    private String nummer;
    private String antall;
    private String film;

    public Bilett(String fornavn, String etternavn, String epost, String nummer, String antall, String film) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.nummer = nummer;
        this.antall = antall;
        this.film = film;
    }

    public Bilett() {
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public String getNummer() {
        return nummer;
    }

    public void setNummer(String nummer) {
        this.nummer = nummer;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }
}


