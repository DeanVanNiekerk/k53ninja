import React from "react";
import styled from "styled-components";

import { NinjaOutlineIcon } from "@/app/components/icons";
import { watermarkStyle } from "@/app/styles";
import { IonContent, IonPage } from "@ionic/react";

import { Checklist, Debug, History, Purchase, RateApp } from "./components";
import { ProfilePageHeader } from "./ProfilePageHeader";

const ProfilePage: React.FC = () => {
    return (
        <Page>
            <ProfilePageHeader />
            <Watermark />
            <Content>
                <Checklist />
                <History />
                <Purchase />
                <RateApp />
                <Debug />
            </Content>
        </Page>
    );
};

const Watermark = styled(NinjaOutlineIcon)`
    ${watermarkStyle}
    fill: #000000;
    opacity: 0.06;
`;

const Content = styled(IonContent)`
    --background: transparent;
    padding-top: 55;
    padding-left: 16;
`;

const Page = styled(IonPage)`
    background: var(--profile-background);
`;

export default ProfilePage;
