import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled'
import styles from '../../../styles/Contactus.module.sass'
import { colors, fontWeights, mixin, mq, Rem } from '../../../styles/designSystem';

const Container = styled.div();

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq.minSmall]: {
    flexDirection: 'row',
  },
});

const FormLabel = styled.label({
  fontWeight: fontWeights.bold,
  fontSize: Rem(16),
  color: colors.important,
  [mq.maxTablet]: {
    padding: `${Rem(15)} ${Rem(15)} 0`,
  },
  [mq.minSmall]: {
    display: 'flex',
    alignItems: 'center',
    width: Rem(200),
    height: Rem(68),
  },
  '& i': {
    fontStyle: 'normal',
    '&::before': {
      content: 'attr(mark)',
      paddingLeft: Rem(5),
      fontWeight: fontWeights.black,
      fontSize: Rem(20),
      color: colors.accent,
    },
  },
});

const FormControl = styled.div({
  position: 'relative',
  marginBottom: Rem(30),
  [mq.minSmall]: {
    ...mixin.col,
  },
  '& input, & textarea': {
    display: 'block',
    width: '100%',
    outline: 'none',
    border: 'none',
    borderBottom: `2px solid ${colors.background}`,
    fontWeight: fontWeights.regular,
    fontSize: Rem(16),
    color: colors.important,
    '&::placeholder': {
      color: colors.primary,
    },
    '&:focus': {
      borderColor: colors.accent,
    },
  },
})

const FormControlInput = styled.input({
  padding: `0 ${Rem(15)}`,
  height: Rem(68),
});

const FormControlTextArea = styled.textarea({
  padding: Rem(15),
  height: Rem(270),
  resize: 'none',
});

const Error = styled.p({
  position: 'absolute',
  bottom: Rem(-25),
  left: 0,
  fontWeight: fontWeights.regular,
  fontSize: Rem(14),
  color: 'red',
});

const ButtonContainer = styled.div({
  paddingTop: Rem(50),
  textAlign: 'center',
});

const SubmitButton = styled.button({
  backgroundColor: colors.white,
  border: '2px solid',
  padding: `${Rem(15)} ${Rem(30)}`,
  fontWeight: fontWeights.bold,
  fontSize: Rem(18),
  color: colors.accent,
});

SubmitButton.defaultProps = {
  type: 'button',
};

function ContactUsRequest() {
  const { i18n, t } = useTranslation('common')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const form = useRef();

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const onSubmit = (data) => {
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_USER_ID
    )
      .then((result) => {
        alert('Sending succeeded. We will check and contact you. 보내기 성공하였습니다. 검토하고 연락드리겠습니다.');
      }, (error) => {
        alert('Send failed. Please try again. 보내기 실패하였습니다. 다시 시도해주세요.');
      });
  };

  return (
    <Container>
      <p className={styles['caution']} aria-hidden='true'>
        {i18n.language === 'en'
          ? <strong aria-hidden='true'>Fields marked <b>&#8270;</b> are required.</strong>
          : <strong aria-hidden='true'><b>&#8270;</b> 표시가 있는 항목은 필수입니다.</strong>
        }
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <legend>협업제안 및 문의 양식</legend>
          <FormGroup>
            <FormLabel htmlFor='organization'>{t('request.label1')}<i mark='&#x204E;' /></FormLabel>
            <FormControl>
              <FormControlInput
                id={'organization'}
                element={'input'}
                placeholder={t('request.placeholder1')}
                type={'text'}
                aria-required={'true'}
                aria-invalid={errors.organization ? 'true' : null}
                aria-describedby={errors.organization ? 'error-organization' : null}
                {...register
                  ('organization', {
                    required: true,
                    minLength: 2,
                  })
                }
              />
              {errors.organization && <Error id='error-organization'>{t('request.error1')}</Error>}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='contact'>{t('request.label2')}<i mark='&#x204E;' /></FormLabel>
            <FormControl>
              <FormControlInput
                id={'contact'}
                placeholder={t('request.placeholder2')}
                type={'text'}
                aria-required={'true'}
                aria-invalid={errors.contact ? 'true' : null}
                aria-describedby={errors.contact ? 'error-contact' : null}
                {...register
                  ('contact', {
                    required: true,
                    minLength: 2,
                  })
                }
              />
              {errors.contact && <Error id='error-contact'>{t('request.error2')}</Error>}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='phone'>{t('request.label3')}<i mark='&#x204E;' /></FormLabel>
            <FormControl>
              <FormControlInput
                id={'phone'}
                placeholder={t('request.placeholder3')}
                type={'text'}
                aria-required={'true'}
                aria-invalid={errors.phone ? 'true' : null}
                aria-describedby={errors.phone ? 'error-phone' : null}
                {...register
                  ('phone', {
                    required: true,
                    minLength: 15,
                  })
                }
              />
              {errors.phone && <Error id='error-phone'>{t('request.error3')}</Error>}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='fax'>{t('request.label4')}</FormLabel>
            <FormControl>
              <FormControlInput
                id={'fax'}
                placeholder={t('request.placeholder4')}
                type={'text'}
                aria-invalid={errors.fax ? 'true' : null}
                aria-describedby={errors.fax ? 'error-fax' : null}
                {...register
                  ('fax', {
                    required: false,
                    minLength: 12,
                  })
                }
              />
              {errors.fax && <Error id='error-fax'>{t('request.error4')}</Error>}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='email'>{t('request.label5')}<i mark='&#x204E;' /></FormLabel>
            <FormControl>
              <FormControlInput
                id={'email'}
                placeholder={t('request.placeholder5')}
                type={'email'}
                aria-required={'true'}
                aria-invalid={errors.email ? 'true' : null}
                aria-describedby={errors.email ? 'error-email' : null}
                {...register
                  ('email', {
                    required: true,
                    minLength: 7,
                    maxLength: 320,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })
                }
              />
              {errors.email && <Error id='error-email'>{t('request.error5')}</Error>}
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='contents'>{t('request.label6')}<i mark='&#x204E;' /></FormLabel>
            <FormControl>
              <FormControlTextArea
                id={'contents'}
                placeholder={t('request.placeholder6')}
                aria-required={'true'}
                aria-invalid={errors.contents ? 'true' : null}
                aria-describedby={errors.contents ? 'error-context' : null}
                {...register
                  ('contents', {
                    required: true
                  })
                }
              />
              {errors.contents && <Error id='error-contents'>{t('request.error6')}</Error>}
            </FormControl>
          </FormGroup>
          <p className={styles['notice']}>{t('request.notice')}</p>
          <ButtonContainer>
            <SubmitButton>{t('request.submit')}</SubmitButton>
          </ButtonContainer>
        </fieldset>
      </form>
    </Container>
  )
}

export default ContactUsRequest;
