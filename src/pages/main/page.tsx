import Add from '@mui/icons-material/Add';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TaskIcon from '@mui/icons-material/Task';
import {Box, Button, Grid, GridProps, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

import Wallpaper from '~/assets/wallpaper.jpg';
import {Container} from '~/components/container';
import {PageLayout} from '~/components/layout/page-layout';
import {SxMapProps} from '~/types';

const styles: SxMapProps<'cardLink' | 'cardContainer' | 'cardIcon' | 'banner' | 'bannerTitle'> = {
    cardLink: {
        width: '100%',
        height: '100%',
        fontWeight: 600,
        fontSize: 16,
    },
    cardContainer: {
        p: 2,
        minHeight: 180,
        transition: 'box-shadow 0.25s ease',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: '0px 0px 15px 0px lightShadow',
        },
    },
    cardIcon: {
        width: 32,
        height: 32,
    },
    banner: {
        objectFit: 'cover',
        width: '100%',
        height: 200,
        borderRadius: 4,
        boxShadow: '0px 0px 15px 0px lightShadow',
    },
    bannerTitle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        py: 10,
        fontWeight: 600,
        fontSize: 28,
    },
};

const cardSizes: GridProps['size'] = {xs: 12, md: 6, lg: 4};

const MainPage = () => {
    return (
        <PageLayout pageTitle="Главная">
            <Box sx={{position: 'relative'}}>
                <Box component="img" src={Wallpaper} sx={styles.banner} />
                <Typography sx={styles.bannerTitle} align="center">
                    Добро пожаловать в Mini CRM
                </Typography>
            </Box>

            <Grid container spacing={3} component="div" sx={{mt: 2}}>
                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button component={Link} to="" sx={styles.cardLink} startIcon={<TaskIcon sx={styles.cardIcon} />}>
                        Мои задачи
                    </Button>
                </Grid>

                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button
                        component={Link}
                        to=""
                        sx={styles.cardLink}
                        startIcon={<LocalOfferIcon sx={styles.cardIcon} />}
                    >
                        Мои сделки
                    </Button>
                </Grid>

                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button component={Link} to="" sx={styles.cardLink} startIcon={<Add sx={styles.cardIcon} />}>
                        Создать сделку
                    </Button>
                </Grid>

                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button component={Link} to="" sx={styles.cardLink} startIcon={<Add sx={styles.cardIcon} />}>
                        Создать задачу
                    </Button>
                </Grid>
                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button component={Link} to="" sx={styles.cardLink} startIcon={<Add sx={styles.cardIcon} />}>
                        Создать заказчика
                    </Button>
                </Grid>
                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button component={Link} to="" sx={styles.cardLink} startIcon={<Add sx={styles.cardIcon} />}>
                        Создать компанию
                    </Button>
                </Grid>
                <Grid size={cardSizes} component={Container} sx={styles.cardContainer}>
                    <Button component={Link} to="" sx={styles.cardLink} startIcon={<Add sx={styles.cardIcon} />}>
                        Создать воронку
                    </Button>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default MainPage;
