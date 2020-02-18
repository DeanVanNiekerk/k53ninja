import "./NavigationItem.css";

import { chevronForwardOutline, eye } from "ionicons/icons";
import React from "react";
import { connect } from "react-redux";
import { Translate } from "react-translated";
import { ProgressBar } from "src/app/components";
import { RootState } from "src/state";
import { seenTotalsSelector } from "src/state/study/log";
import { navigationIconsSelector } from "src/state/study/navigation";

import { CreateAnimation, IonIcon, IonLabel, IonText } from "@ionic/react";

type Props = {
    navigationItemKey: string;
    onClick: (navigationItemKey: string) => void;
    index: number;
} & PropsFromState;

const NavigationItemComponent: React.FC<Props> = props => {
    const delay = props.index * 75;
    const seenTotal = props.seenTotals[props.navigationItemKey];
    const seenProgress = seenTotal ? Math.floor((seenTotal.seen / seenTotal.total) * 100) : 0;
    const containerAnimationDuration = 300;
    return (
        <CreateAnimation
            play={true}
            delay={delay}
            duration={containerAnimationDuration}
            easing="ease"
            fromTo={{
                property: "transform",
                fromValue: "translateY(85px)",
                toValue: "translateY(0px)",
            }}
        >
            <div
                className="root-navigation-item"
                onClick={() => props.onClick(props.navigationItemKey)}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <CreateAnimation
                        play={true}
                        duration={500}
                        delay={delay + containerAnimationDuration}
                        easing="ease"
                        keyframes={[
                            { offset: 0, transform: "scale(0)" },
                            { offset: 0.8, transform: "scale(1.2)" },
                            { offset: 1, transform: "scale(1)" },
                        ]}
                    >
                        <IonIcon
                            icon={
                                props.navigationIcons[props.navigationItemKey] ||
                                chevronForwardOutline
                            }
                            className="icon"
                        />
                    </CreateAnimation>
                    <IonLabel>
                        <div>
                            <IonText style={{ fontSize: 14 }}>
                                <Translate text={props.navigationItemKey} />
                            </IonText>
                        </div>
                    </IonLabel>
                    <div className="progress-bar">
                        <div style={{ width: 60 }}>
                            <ProgressBar
                                progress={seenProgress}
                                height={6}
                                backgroundOpacity={0.3}
                                foregroundOpacity={0.7}
                            ></ProgressBar>
                        </div>
                        <div>
                            <IonIcon
                                icon={eye}
                                style={{
                                    fontSize: 11,
                                    marginLeft: 4,
                                    opacity: seenProgress === 100 ? 0.7 : 0.4,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CreateAnimation>
    );
};

type PropsFromState = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootState) => {
    return {
        navigationIcons: navigationIconsSelector(state),
        seenTotals: seenTotalsSelector(state),
    };
};

const NavigationItem = connect(mapStateToProps)(NavigationItemComponent);

export { NavigationItem };
