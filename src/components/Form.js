import React from "react";
import "./Form.css";
import { useColorMode } from "@chakra-ui/color-mode";
function Form() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <div className={isDark ? "contain" : "container"}>
      <form action="https://formspree.io/f/mnqlzneg" method="POST" id="my-form">
        <div className="form-group">
          <label for="Name">  Name</label>
          <input type="text" id="Name" name="Name" />
        </div>

        <div className="form-group">
          <label for="Organization Name">Organization Name</label>
          <input type="text" id="Organization Name" name="Organization Name" />
        </div>
        <div className="form-group">
          <label for="Role or Position">Role or Position</label>
          <input type="text" id="Role or Position" name="Role or Position" />
        </div>


        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
