package com.example.oblig2javascript;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BilettController {

    private final List<Bilett> alleBiletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBilett (Bilett innBilett){
        alleBiletter.add(innBilett);
    }

    @GetMapping("/hentAlle")
        public List<Bilett> hentAlle(){
            return alleBiletter;
    }

    @GetMapping ("/slettAlle")
    public void slettAlle(){
        alleBiletter.clear();
    }
}