import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import contactBg from "../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
import { graphql, Link } from "gatsby"
import { useForm } from "react-hook-form"
import Locations from "../components/Locations"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  tel: yup.number().integer(),
  message: yup.string().required(),
})

const Contact = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const submitForm = data => {
    console.log({ data })
  }

  return (
    <Layout>
      <ContactWrapper>
        <HeroWrapper>
          <HeroInner>
            <HeroText>
              <HeroTitle>contact us</HeroTitle>
              <HeroDesc>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </HeroDesc>
            </HeroText>
            <HeroForm
              action="https://formspree.io/f/mknklope"
              method="POST"
              onSubmit={handleSubmit(submitForm)}
            >
              <FormName
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <FormEmail
                type="email"
                name="email"
                placeholder="Email Address"
                className="contact-input"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>

              <FormTel
                type="tel"
                name="tel"
                placeholder="Phone"
                className="contact-input"
                {...register("tel")}
              />
              <p>{errors.tel?.message}</p>

              <FormMessage
                name="message"
                placeholder="Your Message"
                rows="8"
                className="contact-input"
                {...register("message")}
              />
              <p>{errors.message?.message}</p>

              <FormButton className="btn" type="submit">
                Submit
              </FormButton>
            </HeroForm>
          </HeroInner>
        </HeroWrapper>
        <Locations />
      </ContactWrapper>
    </Layout>
  )
}

const ContactWrapper = styled.main`
  width: 100vw;
  overflow-x: hidden;
`
const HeroWrapper = styled.section`
  height: 100%;
  width: 94vw;
  background-color: var(--hero-bg);
  background-image: url(${contactBg});
  background-size: contain;
  padding: 30px 15px;
  margin: auto;
  @media screen and (min-width: 785px) {
    width: 88vw;
    border-radius: 15px;
  }
`
const HeroInner = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  text-align: center;
  color: var(--white-text);
  @media screen and (min-width: 785px) {
    text-align: left;
    width: 90%;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`
const HeroText = styled.article`
  width: 90%;
`
const HeroTitle = styled.h3`
  text-transform: capitalize;
  font-size: 30px;
  letter-spacing: 2px;
`
const HeroDesc = styled.p`
  font-size: 20px;
`
const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 90%;
  height: 100%;
  @media screen and (min-width: 785px) {
    justify-self: start;
    margin-left: 40px;
  }
`
const FormName = styled.input``
const FormEmail = styled.input``
const FormTel = styled.input``
const FormMessage = styled.textarea``
const FormButton = styled.button`
  margin: 20px auto 0;
  width: 140px;
  @media screen and (min-width: 785px) {
    justify-self: flex-end;
  }
`

export default Contact
