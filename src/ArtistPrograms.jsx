import React, { useState } from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const faqData = [
    {
        question: "How can artists join the OneArt program to Gain Art?",
        answer:
            "Artists can apply by submitting their portfolio through the Join as Artist form. Once reviewed, our team will reach out with next steps for collaboration and onboarding. The common goal is to achieve meaningful artistic collaboration.",
    },
    {
        question: "What kind of programs does OneArt offer to get art?",
        answer:
            "OneArt offers workshops, residencies, exhibitions, and collaborative programs designed to help artists grow and showcase their work.",
    },
    {
        question: "Is there a fee to participate in the artist programs?",
        answer:
            "Some programs are free, while others may require a participation fee depending on the resources and mentorship provided.",
    },
    {
        question: "Can I showcase my artwork on the OneArt platform?",
        answer:
            "Yes, selected artists get opportunities to showcase their artwork on the OneArt platform and partner exhibitions.",
    },
    {
        question: "How often are new programs announced in upcoming?",
        answer:
            "New programs are announced regularly throughout the year. Stay connected for updates.",
    },
];

const ArtistPrograms = () => {
    const [expanded, setExpanded] = useState(0); // first open by default

    const handleChange = (index) => (event, isExpanded) => {
        setExpanded(isExpanded ? index : false);
    };

    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 6, md: 10 } }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                    gap: 5,
                    alignItems: "start",
                }}
            >
                {/* LEFT FAQ */}
                <Box>
                    <Typography variant="h3" fontWeight={700} mb={2} fontFamily="serif">
                        Artist & Programs
                    </Typography>

                    {faqData.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            disableGutters
                            elevation={0}
                            sx={{
                                borderBottom: "1px solid #000",
                                "&:before": { display: "none" },
                            }}
                        >
                            <AccordionSummary
                                sx={{
                                    px: 0,
                                    py: 2,
                                    alignItems: "center",
                                }}
                                expandIcon={
                                    expanded === index ? (
                                        <CloseIcon sx={{ fontSize: 20 }} />
                                    ) : (
                                        <AddIcon sx={{ fontSize: 20 }} />
                                    )
                                }
                            >
                                <Typography fontWeight={600}>
                                    {item.question}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ px: 0, pb: 3 }}>
                                <Typography color="text.secondary" lineHeight={1.7}>
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                {/* RIGHT IMAGE */}
                <Box
                    sx={{
                        width: "100%",
                        height: "85%",
                        minHeight: 420,
                    }}
                >
                    <Box
                        component="img"
                        src="https://oneart.wpengine.com/wp-content/uploads/2025/10/faq-page-img.jpg"
                        alt="Artist Program"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ArtistPrograms;
