import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Form məlumatları:", data);
    setFormSubmitted(true); 
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={4} sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Əlaqə Formu
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Ad"
            fullWidth
            margin="normal"
            {...register("ad", { required: "Ad sahəsi boş ola bilməz" })}
            error={!!errors.ad}
            helperText={errors.ad ? errors.ad.message : ""}
          />

          <TextField
            label="Soyad"
            fullWidth
            margin="normal"
            {...register("soyad", { required: "Soyad sahəsi boş ola bilməz" })}
            error={!!errors.soyad}
            helperText={errors.soyad ? errors.soyad.message : ""}
          />

          <TextField
            label="Telefon"
            fullWidth
            margin="normal"
            {...register("telefon", {
              required: "Telefon sahəsi boş ola bilməz",
              pattern: {
                value: /^\d{10}$/, // 10 rəqəmdən ibarət telefon nömrəsi
                message: "Telefon nömrəsi düzgün deyil (10 rəqəm olmalıdır)"
              }
            })}
            error={!!errors.telefon}
            helperText={errors.telefon ? errors.telefon.message : ""}
          />

          <TextField
            label="E-mail"
            fullWidth
            margin="normal"
            type="email"
            {...register("email", {
              required: "E-mail sahəsi boş ola bilməz",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Zəhmət olmasa düzgün e-mail daxil edin"
              }
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />

          <TextField
            label="Şərh"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register("sherh", { required: "Şərh sahəsi boş ola bilməz" })}
            error={!!errors.sherh}
            helperText={errors.sherh ? errors.sherh.message : ""}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{ mt: 2 }}
          >
            Göndər
          </Button>
        </form>

        {formSubmitted && (
          <Typography variant="h6" color="success.main" sx={{ mt: 2, textAlign: 'center' }}>
            Forma uğurla göndərildi!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ContactForm;
