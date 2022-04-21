import React, { useState } from "react";
import {
  Card,
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AddModule = (props) => {
  const types = ["git", "mod", "svn", "hg", "fossil", "bzr"];
  const [domain, setDomain] = useState(props.domains[0].name);
  const [name, setName] = useState("");
  const [type, setType] = useState(types[0]);
  const [repo, setRepo] = useState("");
  // const [website, setWebsite] = useState("");
  const [docs, setDocs] = useState("");

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleVCSChange = (event) => {
    setType(event.target.value);
  };

  const handleModuleChange = (event) => {
    setName(event.target.value);
  };

  const handleRepoChange = (event) => {
    setRepo(event.target.value);
  };

  // const handleWebsiteChange = (event) => {
  //   setWebsite(event.target.value);
  // };

  const handleDocsChange = (event) => {
    setDocs(event.target.value);
  };

  const handleAddDomain = (event) => {
    event.preventDefault();

    props.add({});
  };

  return (
    <Card>
      <Box
        component="form"
        sx={{
          padding: "10px",
        }}
      >
        <Typography variant="h2">Add Module</Typography>
        <Grid
          container
          spacing={2}
          sx={{ padding: "10px" }}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={7}>
            <Select
              required
              fullWidth
              labelId="demo-select-small"
              id="demo-select-small"
              value={domain}
              onChange={handleDomainChange}
            >
              {props.domains.map((domain) => (
                <MenuItem key={domain.name} value={domain.name}>
                  {domain.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Module"
              value={name}
              onChange={handleModuleChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={type}
              onChange={handleVCSChange}
            >
              {types.map((type) => (
                <MenuItem key={type} value={type}>
                  {type.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Repository"
              placeholder="https://github.com/user/repo"
              value={repo}
              onChange={handleRepoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-required"
              label="Documentation"
              placeholder="https://pkg.go.dev/go.example.com/name"
              value={docs}
              onChange={handleDocsChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              onClick={handleAddDomain}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <div
          style={{
            paddingTop: "10px",
            textAlign: "right",
          }}
        ></div>
      </Box>
    </Card>
  );
};

export default AddModule;
