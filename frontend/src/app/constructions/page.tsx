"use client"
import CardConstruction from "@/components/CardConstruction";
import Header from "@/components/Header";
import MyMenu from "@/components/MyMenu";

export default function Constructions() {
    return (
        <>
            <MyMenu/>
            <Header description={"Construções"} route={'/register-constructions'} useButton={true}/>
            <CardConstruction description="Surio"/>
        </>
    )
}