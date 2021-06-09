import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import {
  FooterContainer, FooterLogoContainer, FooterLinkContainer, FooterLink, FooterLinkHeading, FooterCopyright, StyledFooterGrid, StoreImgContainer, PlayStoreImg, AppStoreImg,
} from '../styles/Footer.styled';

const AppFooter = () => (
  <FooterContainer>
    <FooterLogoContainer>
      <Image
        src="/logo_vibeoo.svg"
        alt="vibeoo website logo"
        width={100}
        height={50}
        layout="intrinsic"
      />
    </FooterLogoContainer>
    <StyledFooterGrid>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <FooterLinkHeading>
            Company
          </FooterLinkHeading>
          <FooterLinkContainer>
            <FooterLink>
              Brands
            </FooterLink>
            <FooterLink>
              Brands
            </FooterLink>
            <FooterLink>
              Brands
            </FooterLink>
          </FooterLinkContainer>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FooterLinkHeading>
            Organization
          </FooterLinkHeading>
          <FooterLinkContainer>
            <FooterLink>
              Brands
            </FooterLink>
            <FooterLink>
              Brands
            </FooterLink>
            <FooterLink>
              Brands
            </FooterLink>
          </FooterLinkContainer>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FooterLinkHeading>
            Establishment
          </FooterLinkHeading>
          <FooterLinkContainer>
            <FooterLink>
              Brands
            </FooterLink>
            <FooterLink>
              Brands
            </FooterLink>
            <FooterLink>
              Brands
            </FooterLink>
          </FooterLinkContainer>
        </Grid>

      </Grid>
      <StoreImgContainer>
        <PlayStoreImg>
          <Image
            src="/playstore_img.svg"
            alt="vibeoo website logo"
            width={150}
            height={100}
            layout="intrinsic"
          />
        </PlayStoreImg>
        <AppStoreImg>
          <Image
            src="/appstore_img.svg"
            alt="vibeoo website logo"
            width={150}
            height={100}
            layout="intrinsic"
          />
        </AppStoreImg>
      </StoreImgContainer>
    </StyledFooterGrid>

    <FooterCopyright>
      Copyright &#64;
      {' '}
      {new Date().getFullYear().toString()}
      {' '}
      Vibeoo. All right reserved
    </FooterCopyright>
  </FooterContainer>
);

export default AppFooter;
