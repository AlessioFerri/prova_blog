import React from "react";

import { NavLink, useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import posts from "../data/my-posts";

class Article extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const post = posts[this.props.match.params.id];
    return (
      <div style={{ marginTop: 20, padding: 30 }}>
          <Grid container spacing={2} justify="center">

              <Grid item key={post.title}>

                <Card>

                  <CardActionArea>

                    <CardMedia
                      component="img"
                      alt="Immagine Post"
                      height="200"
                      image={post.image}
                      title={post.title}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography component="p">{post.text}</Typography>
                    </CardContent>

                  </CardActionArea>

                  <CardActions>
                    <NavLink exact to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Button size="small" color="primary">
                        Torna indietro
                      </Button>
                    </NavLink>
                  </CardActions>

                </Card>

              </Grid>

          </Grid>

      </div>
    );
  }

}

export default Article;
