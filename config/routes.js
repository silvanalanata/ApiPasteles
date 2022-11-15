
    const express = require('express');

  

    const { Router } = require("express");
    const router = Router();
    //router.use(express.urlencoded({extended: true}));
    router.use(express.json());
    
    const {   getAllPasteles, postNuevoPastel, postNuevaCalificacion, getPastelId } = require("../controllers/pasteles.controller");
    
    
    router.get("/getAllPasteles", getAllPasteles);
    router.post("/postNuevoPastel", postNuevoPastel);
    router.post("/postNuevaCalificacion/:id",postNuevaCalificacion);
    router.get("/getPastelId/:id",getPastelId);
    
    module.exports = router;