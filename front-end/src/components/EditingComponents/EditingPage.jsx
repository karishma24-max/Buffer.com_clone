import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Header from "./Header";
import ButtonComp from "./ButtonComp";
import Text1 from "./Text1";
import MidImage from "./MidImage";
import YouTube from "./YouTube";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTemplate } from "../../redux/Template/template.action";
import { useDispatch } from "react-redux";

const EditingPage = () => {
  //   const { isOpen, onToggle } = useDisclosure();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemplate(id));
  }, [id]);

  return (
    <Box w="420px" margin="auto" bg="#f5f5f5">
      <Heading as="h4" size="md" marginTop="10px" display="block">
        Your Site Layout
      </Heading>
      <Header
        id={id}
        initText={{ heading1content: "", text1content: "" }}
        name={{
          headingContent: "heading1content",
          textcontent: "text1content",
        }}
      />
      <ButtonComp
        id={id}
        name={{ buttonContent: "button1content", buttonLink: "button1link" }}
        inittext={{ buttonContent: "", buttonLink: "" }}
      />
      {id === "636f9741b7cd3418c5651931" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button2content", buttonLink: "button2link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {/* for checking 2nd template */}
      {id === "636f9741b7cd3418c565192f" ? <MidImage /> : <></>}
      <Text1
        id={id}
        name={
          id === "636f9741b7cd3418c5651931"
            ? "description2content"
            : "descriptioncontent"
        }
        inittext={""}
      />
      <MidImage id={id} />
      {id == "636f9741b7cd3418c5651931" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button3content", buttonLink: "button3link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id == "636f9741b7cd3418c5651931" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button4content", buttonLink: "button4link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id == "636f9741b7cd3418c5651930" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button2content", buttonLink: "button2link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id == "636f9741b7cd3418c5651930" || "636f9741b7cd3418c565192e" ? (
        <Text1 id={id} name={"description2content"} inittext={""} />
      ) : (
        <></>
      )}
      {id === "636f9741b7cd3418c565192f" ||
      id === "636f9741b7cd3418c5651930" ? (
        <MidImage />
      ) : (
        <></>
      )}
      {id === "636f9741b7cd3418c565192f" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button2content", buttonLink: "button2link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id === "636f9741b7cd3418c5651930" ? <MidImage /> : <></>}
      <YouTube id={id} name={"iframesrc"} inittext={""} />
    </Box>
  );
};

export default EditingPage;
