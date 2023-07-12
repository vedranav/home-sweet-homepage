import { Typography, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function getCurrentYear(): number {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FFF",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          align="center"
          color="inherit"
          sx={{ mr: 2 }}
        >
          &copy; {getCurrentYear()} Vedrana Vidulin
        </Typography>
        <div>
          <IconButton
            aria-label="LinkedIn"
            color="inherit"
            href="https://www.linkedin.com/in/vedranavidulin/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="GitHub"
            color="inherit"
            href="https://github.com/vedranav"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            color="inherit"
            href="https://twitter.com/VedranaVidulin"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
