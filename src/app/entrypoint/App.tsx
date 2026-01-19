import '@/app/styles/normalize.css';
import styled from '@emotion/styled';
import {COLORS} from "@/shared/assets";
import {EventTime, Header, Message, Location, DressCode, Wishes, Questionnaire} from "@/sections";
import {ThemeProvider} from "@/app/providers";
import {Contacts} from "@/sections/Contacts";
import {BackgroundGenerator} from "@/shared/ui/BackgroundGenerator/BackgroundGenerator.tsx";


function App() {
  return (
    <Root>
        <ThemeProvider>
            <BgLayout>
                <BackgroundGenerator/>
                <Layout>
                    <Header/>
                    <Message/>
                    <EventTime/>
                    <Location/>
                    <DressCode/>
                    <Wishes/>
                    <Contacts/>
                    <Questionnaire/>
                </Layout>
            </BgLayout>
        </ThemeProvider>
    </Root>

  )
}
const BgLayout = styled.div`
    position: relative;
`
const Layout = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 0 16px;
    z-index: 1;

    /* mobile first */
    max-width: 100%;

    /* tablets */
    @media (min-width: 768px) {
        max-width: 720px;
        padding: 0 20px;
    }

`;

const Root = styled.main`
  overflow: hidden;
  background-color: ${COLORS.background_00};
`;

export default App
