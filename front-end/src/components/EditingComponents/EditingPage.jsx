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
    <Box w="420px" margin="auto" bg="#f5f5f5" >
      <Box>
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
      {id === "636fe09fc6305def2eb21bf6" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button2content", buttonLink: "button2link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {/* for checking 2nd template */}
      {id === "636fde4cf6a43916e145eafc" ? <MidImage /> : <></>}
      <Text1
        id={id}
        name={
          id === "636fe09fc6305def2eb21bf6"
            ? "description2content"
            : "descriptioncontent"
        }
        inittext={""}
      />
      <MidImage id={id} />
      {id == "636fe09fc6305def2eb21bf6" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button3content", buttonLink: "button3link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id == "636fe09fc6305def2eb21bf6" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button4content", buttonLink: "button4link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id == "636fde4cf6a43916e145eafd" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button2content", buttonLink: "button2link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id == "636fde4cf6a43916e145eafd" || "636fde4cf6a43916e145eafb" ? (
        <Text1 id={id} name={"description2content"} inittext={""} />
      ) : (
        <></>
      )}
      {id === "636fde4cf6a43916e145eafc" ||
      id === "636fde4cf6a43916e145eafd" ? (
        <MidImage />
      ) : (
        <></>
      )}
      {id === "636fde4cf6a43916e145eafc" ? (
        <ButtonComp
          id={id}
          name={{ buttonContent: "button2content", buttonLink: "button2link" }}
          inittext={{ buttonContent: "", buttonLink: "" }}
        />
      ) : (
        <></>
      )}
      {id === "636fde4cf6a43916e145eafd" ? <MidImage /> : <></>}
      <YouTube id={id} name={"iframesrc"} inittext={""} />
      </Box>
    </Box>
  );
};

export default EditingPage;
