import * as React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Row,
  Section,
  Text,
  Tailwind,
  Button,
  Hr,
} from "@react-email/components";

interface EmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Email = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Message from{" "}
              <strong>{(firstName && lastName) || "John Smith"}</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px] text-center">
              {message || "this is where the message will go"}
            </Text>
            <Hr />
            <Section>
              <Row>
                <Column>
                  <Button
                    className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                    href={""}
                  >
                    {email || "johnsmith@example.com"}
                  </Button>
                </Column>
                <Column align="right">
                  <Button
                    className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                    href={""}
                  >
                    {phone || "07000000000"}
                  </Button>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default Email;
