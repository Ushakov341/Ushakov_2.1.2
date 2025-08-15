import React, { useState } from 'react';
import styles from './ObjectFieldCreator.module.css';

function ObjectFieldCreator() {
  const [fieldName, setFieldName] = useState('');
  const [fieldValue, setFieldValue] = useState('');
  const [dataObject, setDataObject] = useState({});
  function createField() {
    if (fieldName === '') {
      return;
    }
    const newObject = {
      ...dataObject,
      [fieldName]: fieldValue,
    };
    setDataObject(newObject);
    setFieldName('');
    setFieldValue('');
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Создание полей объекта</h1>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Название поля:</label>
          <input
            type="text"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            placeholder="Введите название поля"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Значения поля:</label>
          <input
            type="text"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            placeholder="Введите значение поля"
            className={styles.input}
          />
        </div>
        <button onClick={createField} className={styles.button}>
          Создать поле в объекте
        </button>
        <div className={styles.objectDisplay}>
          <p className={styles.objectText}>
            Объект: {JSON.stringify(dataObject)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ObjectFieldCreator;
