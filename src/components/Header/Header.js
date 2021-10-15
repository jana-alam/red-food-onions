import {
  AppBar,
  Container,
  Toolbar,
  Chip,
  IconButton,
  Badge,
  Button,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../images/logo2.png";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
      <Container maxWidth="lg">
        <Toolbar
          variant="dense"
          sx={{ justifyContent: "space-between", padding: "20px 0" }}
        >
          <Box sx={{ width: "170px" }} component="img" src={logo} />
          <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            <Button>Login</Button>
            <Chip
              label="Sign up"
              color="primary"
              sx={{
                padding: "0 10px",
              }}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
