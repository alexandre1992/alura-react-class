import { useState } from "react";
import Button from "../button";
import FieldText from "../field-text";
import ListDropDown from "../list-dropdown";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onPersonSaved({
      name,
      post,
      image,
      team,
    });
    setName('');
    setPost('');
    setImage('');
    setTeam('');
  };

  return (
    <section className="myform">
      <form onSubmit={onSave}>
        <h2>Complete the form to create the colaborate card</h2>
        <FieldText
          required={true}
          label="Name"
          placeholder="Type your name"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <FieldText
          required={true}
          label="Post"
          placeholder="Type your post"
          value={post}
          onChanged={(value) => setPost(value)}
        />
        <FieldText
          label="Image"
          placeholder="Type the image address"
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <ListDropDown
          required={true}
          itens={props.teamsName}
          label="Team"
          value={team}
          onChanged={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
