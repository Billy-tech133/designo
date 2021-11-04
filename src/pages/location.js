import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { graphql } from "gatsby"
import heroBg from "../assets/about/mobile/bg-pattern-hero-about-mobile.svg"
import ContactHero from "../components/ContactHero"
const location = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <LocationWrapper>
        {data.allStrapiMap.nodes.map(location => {
          const {
            contactName,
            countryName,
            firstContact,
            secondOffice,
            secondContact,
            firstOffice,
            id,
            lat,
            long,
            officeName,
          } = location
          return (
            <LocationCard key={id}>
              <MapWrapper
                center={[lat, long]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, long]}></Marker>
              </MapWrapper>
              <MapDescription>
                <MapTitle>
                  <h2>{countryName}</h2>
                </MapTitle>
                <MapDesc>
                  <div>
                    <h3>{officeName}</h3>
                    <p>{firstOffice}</p>
                    <p>{secondOffice}</p>
                  </div>
                  <div>
                    <h3>{contactName}</h3>
                    <p>{firstContact}</p>
                    <p>{secondContact}</p>
                  </div>
                </MapDesc>
              </MapDescription>
            </LocationCard>
          )
        })}
      </LocationWrapper>
      <ContactHero />
    </Layout>
  )
}
const LocationWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  height: 100%;
  width: 100vw;
  margin: auto;
  @media screen and (min-width: 785px) {
    max-width: 88vw;
    grid-gap: 60px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
  }
`

const LocationCard = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  height: 100%;
  width: 100vw;
  @media screen and (min-width: 785px) {
    text-align: left;
    max-width: 88vw;
    grid-gap: 60px;
    border-radius: 15px;
  }
  @media screen and (min-width: 1440px) {
    height: 50%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`

const MapDescription = styled.div`
  background-color: var(--card-bg);
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  @media screen and (min-width: 785px) {
    border-radius: 15px;
    padding: 60px 120px;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`

const MapTitle = styled.div``

const MapDesc = styled.div`
  @media screen and (min-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const MapWrapper = styled(MapContainer)`
  width: 100%;
  height: 400px;
  z-index: -1;
  @media screen and (min-width: 785px) {
    border-radius: 15px;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 3/4;
  }
`
export const query = graphql`
  {
    allStrapiMap {
      nodes {
        contactName
        countryName
        firstContact
        firstOffice
        secondOffice
        secondContact
        id
        lat
        long
        officeName
      }
    }
  }
`
export default location
