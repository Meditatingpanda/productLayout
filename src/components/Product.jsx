import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

function Product({prop}) {
  return (
    <div>
      <Card sx={{ mt:3}}>
        <CardMedia
          component="img"
          sx={{
            height: "15rem",
            objectFit: "contain",
            mt: 2,
          }}
          image={prop.img}
        />
        <CardContent>
          <div className="flex justify-between">
            <Typography gutterBottom variant="h5" component="div">
             {prop.brand}
            </Typography>
            <span className="flex items-center text-gray-500">
              <StarIcon />
              {prop.ratings}
            </span>
          </div>
          <Typography
            // dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="text.secondary"
          >
            {prop.des}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Typography variant="h5">Rs:{Math.floor(prop.price*(1-prop.discount/100))}</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textDecoration: "line-through",
              }}
            >
            Rs:{prop.price}
            </Typography>
            <span className="text-red-400">({prop.discount}% Off)</span>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Product;
