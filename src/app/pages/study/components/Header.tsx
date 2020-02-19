import React from "react";
import { connect } from "react-redux";
import { Translate } from "react-translated";
import { RootState } from "src/state";
import { currentNavigationKeySelector } from "src/state/study/navigation";

import { IonCol, IonGrid, IonListHeader, IonRow, IonText } from "@ionic/react";

type Props = PropsFromState;

const HeaderComponent: React.FC<Props> = props => {
    return (
        <IonListHeader>
            <IonGrid>
                <IonRow style={{ paddingTop: 15, paddingBottom: 25 }}>
                    <IonCol>
                        <IonText>
                            <h2>
                                <Translate text="study" />
                            </h2>
                        </IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonListHeader>
    );
};

type PropsFromState = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootState) => {
    return {
        currentNavigationKey: currentNavigationKeySelector(state),
    };
};

const Header = connect(mapStateToProps)(HeaderComponent);

export { Header };