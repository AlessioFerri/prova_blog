import React from "react";
import { NavLink } from 'react-router-dom';

import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import posts from "../data/my-posts";
class Blog extends React.Component {
  render() {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={2} justify="center">
            {posts.map( (post, index) => (
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
                      <Typography component="p">{post.excerpt}</Typography>
                    </CardContent>
    
                  </CardActionArea>
    
                  <CardActions>
                    <NavLink exact to={ `/blog/${index}` } style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Button size="small">
                        Leggi tutto
                      </Button>
                    </NavLink>
                  </CardActions>
    
                </Card>
    
              </Grid>
            ))}
            </Grid>
        }
        </div>
      );
    }
}
export default Blog;