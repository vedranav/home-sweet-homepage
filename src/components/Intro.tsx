import { Grid, Typography } from "@mui/material";

function Intro() {
  return (
    <>
      <Grid container spacing={{ md: 10 }}>
        <Grid item sm={12} md={7}>
          <Typography variant="body1">
            <p>
              My name is <b style={{ color: "orange" }}>Vedrana Vidulin</b>. I
              am a seasoned data scientist{" "}
              <b style={{ color: "orange" }}>
                specialized in delivering data-driven solutions to businesses
              </b>
              . With over 15 years of experience and PhD in the field of AI, I
              am well-versed in harnessing the power of data to unlock valuable
              insights for organizations across various industries.
            </p>
            <p>
              I offer a range of{" "}
              <b style={{ color: "orange" }}>data science services</b> tailored
              to meet the unique needs of businesses. Whether it's predictive
              modeling, machine learning, data visualization, or data mining, I
              bring a wealth of expertise and a track record of delivering
              tangible results.
            </p>
            <p>
              My approach begins with a deep understanding of your business
              objectives and challenges. By leveraging advanced analytics
              techniques and cutting-edge algorithms, I{" "}
              <b style={{ color: "orange" }}>
                transform your raw data into actionable insights
              </b>
              . I help you uncover patterns, trends, and hidden opportunities
              that can drive strategic decision-making and{" "}
              <b style={{ color: "orange" }}>improve business outcomes</b>.
            </p>
            <p>
              As a trusted partner, I work closely with your team to ensure the
              successful implementation of data-driven initiatives. I am skilled
              at communicating complex concepts in a clear and accessible
              manner, making data science approachable for all. I can provide
              engaging <b style={{ color: "orange" }}>lectures and workshops</b>{" "}
              tailored to your team's needs, equipping your organization with
              the knowledge and skills to make informed decisions based on
              data-driven evidence.
            </p>
            <p>
              I am well-versed in industry-leading tools and technologies,
              including{" "}
              <b style={{ color: "orange" }}>Python, R, SQL, Tableau</b>, as
              well as the{" "}
              <b style={{ color: "orange" }}>
                theoretical foundations of machine learning and deep learning
              </b>
              . I possess a strong understanding of the underlying principles
              and algorithms that power these techniques. I stay up to date with
              the latest developments in the field, continuously refining my
              skills and knowledge to provide you with the most effective and
              innovative solutions.
            </p>
            <p>
              By engaging my data science services,{" "}
              <b style={{ color: "orange" }}>
                you gain a competitive edge in a data-driven landscape
              </b>
              . I am committed to delivering exceptional value, driving
              efficiency, and unlocking new opportunities for your business
              through the power of data.
            </p>
            <p>
              I would be delighted to discuss your specific requirements and
              explore how my data science expertise can contribute to your
              success.
            </p>
          </Typography>
        </Grid>
        <Grid item sm={12} md={5}>
          <img
            src="Vedrana_Vidulin.jpg"
            alt="Image"
            style={{ maxWidth: "100%", height: "auto", paddingTop: "20px" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Intro;
