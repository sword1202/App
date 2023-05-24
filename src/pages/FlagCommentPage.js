import React, {useMemo} from 'react';
import _ from 'underscore';
import {View, ScrollView} from 'react-native';
import withLocalize, {withLocalizePropTypes} from '../components/withLocalize';
import ScreenWrapper from '../components/ScreenWrapper';
import HeaderWithCloseButton from '../components/HeaderWithCloseButton';
import styles from '../styles/styles';
import Navigation from '../libs/Navigation/Navigation';
import Text from '../components/Text';
import * as Expensicons from '../components/Icon/Expensicons';
import MenuItem from '../components/MenuItem';

const propTypes = {
    ...withLocalizePropTypes,
};

function FlagCommentPage(props) {
    const severities = [
        {
            severity: 'spam',
            name: 'Spam',
            icon: Expensicons.FlagLevelOne,
            description: 'Unsolicited off-topic promotion',
        },
        {
            severity: 'inconsiderate',
            name: 'Inconsiderate',
            icon: Expensicons.FlagLevelOne,
            description: 'Phrased insultingly or disrespectfully, with questionable intentions',
        },
        {
            severity: 'intimidation',
            name: 'Intimidation',
            icon: Expensicons.FlagLevelTwo,
            description: 'Aggressively pursuing an agenda over valid objections',
        },
        {
            severity: 'bullying',
            name: 'Bullying',
            icon: Expensicons.FlagLevelTwo,
            description: 'Targeting an individual to obtain obedience',
        },
        {
            severity: 'harassment',
            name: 'Harassment',
            icon: Expensicons.FlagLevelThree,
            description: 'Racist, misogynistic, or other broadly discriminatory behavior',
        },
        {
            severity: 'assault',
            name: 'Assault',
            icon: Expensicons.FlagLevelThree,
            description: 'Specifically targeted emotional attack with the intention of harm',
        },
    ];

    const flagComment = (severity) => {
        console.log(severity);
        console.log(props.route.params.reportActionID);
        console.log(props.route.params.reportID);
    };

    const severityMenuItems = _.map(severities, (item, index) => (<MenuItem
            key={`${item.severity}_${index}`}
            icon={item.icon}
            shouldShowRightIcon
            title={item.name}
            description={item.description}
            onPress={() => flagComment(item.severity)}
            wrapperStyle={[styles.borderBottom]}
            // furtherDetails={this.props.translate('flags.sendAnonymousWarning')}
            // furtherDetailsIcon={Expensicons.CircleFlag}
            // furtherDetailsIconFill={colors.yellow}
        />)
    )

    return (
        <ScreenWrapper includeSafeAreaPaddingBottom={false}>
            {({safeAreaPaddingBottomStyle}) => (
                <>
                    <HeaderWithCloseButton
                        title={'Flag as Offensive'}
                        onCloseButtonPress={() => Navigation.dismissModal(true)}
                    />
                    <ScrollView
                        contentContainerStyle={safeAreaPaddingBottomStyle}
                        style={[styles.settingsPageBackground]}
                    >
                        <View style={styles.pageWrapper}>
                            <View style={[styles.settingsPageBody, styles.alignItemsCenter]}>
                                <Text style={[styles.baseFontStyle]}>
                                    {'Description of stuff lorem ipsum Description of stuff lorem ipsum Description of stuff lorem ipsum Description of stuff lorem ipsum Description of stuff lorem ipsum Description of stuff lorem ipsum Description of stuff lorem ipsum '}
                                </Text>
                            </View>
                        </View>
                        <Text style={[styles.ph5, styles.textLabelSupporting, styles.mb1]}>
                            {'Choose a reason below:'}
                        </Text>
                        {severityMenuItems}
                    </ScrollView>
                </>
            )}
        </ScreenWrapper>

    );
}

FlagCommentPage.propTypes = propTypes;
FlagCommentPage.displayName = 'FlagCommentPage';

export default withLocalize(FlagCommentPage);

