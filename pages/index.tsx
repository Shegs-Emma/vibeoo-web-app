// import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import AppLayout from '../components/Layout';
import {
  HomeListenInBanner, HomeListenInBannerMainText, HomeBannerSecondaryText,
  HomeDiscoverSection, HomeListenInImgContainer, HomeListenInIntroContainer, StyledLink,
} from '../styles/Home.styled';

const Home = () => {
  const router = '';
  return (
    <div>
      <AppLayout>
        <HomeListenInBanner>
          <HomeListenInIntroContainer>
            <HomeListenInBannerMainText variant="h1">
              Enjoy Quality Episodes & Connect with Amazing Shows
            </HomeListenInBannerMainText>
            <HomeBannerSecondaryText variant="body2" component="p" paragraph>
              Tourists require No Login and Citizen access.
              <br />
              All Features Subscribe to TurnUpAfrica to Stay Tuned.
            </HomeBannerSecondaryText>
            <NextLink
              href="/listen/"
              passHref
            >
              <StyledLink>
                Listen In
              </StyledLink>
            </NextLink>
          </HomeListenInIntroContainer>
          <HomeListenInImgContainer>
            <Image
              src="/home_listen_img.svg"
              alt="Listen in"
              width={600}
              height={600}
              layout="responsive"
            />
          </HomeListenInImgContainer>
        </HomeListenInBanner>
        <HomeDiscoverSection>
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <Image
                src="/home_discover.svg"
                alt="vibeoo website logo"
                width={200}
                height={200}
                layout="intrinsic"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Typography variant="h5">
                Discover, curate and broadcast audio content by amazing creators with Radio On Demand
              </Typography>
              <HomeBannerSecondaryText variant="body2" component="p" paragraph>
                Tourists require No Login and Citizen access,
                All Features Subscribe to TurnUpAfrica to Stay Tuned.
              </HomeBannerSecondaryText>
              <NextLink
                href="/listen/"
                passHref
              >
                <StyledLink>
                  Take a tour
                </StyledLink>
              </NextLink>
            </Grid>
          </Grid>
        </HomeDiscoverSection>
      </AppLayout>
    </div>
  );
};

export default Home;
