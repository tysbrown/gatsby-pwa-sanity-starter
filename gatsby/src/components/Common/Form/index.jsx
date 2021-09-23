import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import { FormField } from 'components';
import * as styles from './styles.module.scss';

const Form = ({ fields, formId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  useEffect(
    () =>
      // Set submitting to false in clean up function
      () => {
        setSubmitting(false);
      },
    []
  );

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const url = `https://submit-form.com/${formId}`;
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      };
      const response = await fetch(url, config);
      // const json = await response.json()
      if (response.ok) {
        // return json
        return navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setSubmissionError('Oops something went wrong, please try again');
      setSubmitting(false);
    }
  };

  return (
    <section>
      {submissionError && <p>{submissionError}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <button type="submit" disabled aria-hidden="true" style={{ display: 'none' }} />
        <input
          ref={register()}
          type="checkbox"
          name="_gotcha"
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />
        {fields.map((field) => {
          const hasError = errors[field.name];
          return (
            <div key={field.name} className={`${styles.field} ${field.className || ''}`}>
              {/* Conditional rendering on label */}
              {field?.label && <span className={styles.label}>{field.label}</span>}
              <FormField
                {...field}
                register={register}
                // Validation
                className={`${hasError ? styles.errorActive : ''}`}
                placeholder={`${hasError ? field.validationMessage : field.placeholder}`}
              />
            </div>
          );
        })}
        <button type="submit" className={`button black ${styles.formButton}`} disabled={submitting}>
          {submitting ? 'Submitting' : 'Sign Up'}
        </button>
        {/* Wrapped in errorMsg container to maintain spacing below submit button while error isn't visible */}
        <span className={styles.errorMsg}>{submissionError && <span>{submissionError}</span>}</span>
      </form>
    </section>
  );
};

export default Form;
