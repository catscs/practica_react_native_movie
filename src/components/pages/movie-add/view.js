import React, {useState, useCallback} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Button from '../../atoms/button';
import Input from '../../atoms/input/view';
import styles from './styles';

const MovieAdd = ({loading, addMovie}) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState({});

  const openImageLibrary = () => {
    const imageOptions = {
      mediaType: 'photo',
      maxWidth: 1280,
      maxHeight: 1280,
      includeBase64: true,
    };
    launchImageLibrary(imageOptions, media => {
      if (media.assets?.length) {
        setImage(media.assets[0]);
      }
    });
  };

  const validateForm = useCallback(() => {
    let valid = true;
    let newErrors = {};
    if (!image) {
      newErrors.image = 'Select image';
      valid = false;
    }

    if (!originalTitle) {
      newErrors.originalTitle = 'require field';
      valid = false;
    }

    if (!title) {
      newErrors.title = 'require field';
      valid = false;
    }

    if (!description) {
      newErrors.description = 'require field';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }, [image, originalTitle, title, description]);

  const onSubmit = useCallback(() => {
    const valid = validateForm();
    if (!valid) {
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 50000) + 10000,
      poster_path: image?.base64
        ? `data:image/jpeg;base64,${image?.base64}`
        : null,
      overview: description,
      title,
      original_title: originalTitle,
    };
    addMovie(data);
  }, [validateForm, addMovie, image, description, title, originalTitle]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.viewImage} onPress={openImageLibrary}>
        {image ? (
          <Image source={{uri: image.uri}} style={styles.image} />
        ) : (
          <Image
            source={require('../../../assets/img/no-image.png')}
            style={styles.image}
          />
        )}
        <View style={styles.imageButton}>
          <View style={styles.contentText}>
            <Text style={styles.imageButtonLabel}>
              {image ? 'Edit image' : 'Select image'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {errors?.image ? <Text style={styles.error}>{errors?.image}</Text> : null}
      <Input
        label="Original title"
        placeholder="Title"
        value={originalTitle}
        onChangeText={setOriginalTitle}
        style={styles.input}
        error={errors?.originalTitle}
      />
      <Input
        label="Title"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        error={errors?.title}
      />
      <Input
        label="Description"
        placeholder="Description"
        style={styles.input}
        styleInput={styles.textArea}
        value={description}
        onChangeText={setDescription}
        error={errors?.description}
        numberOfLines={6}
        multiline={true}
      />

      <Button label="Save" loading={loading} onPress={onSubmit} />
    </ScrollView>
  );
};

export default MovieAdd;
