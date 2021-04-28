<?php

namespace Drupal\account_login\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Entity\User;
use Drupal\Core\Url;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * Implements an account_login form.
 */
class AccountLoginForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'account_login_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['tipo_documento'] = [
      '#type' => 'select',
      '#title' => $this->t('Tipo de Documento'),
      '#options' => [
        'CC' => $this->t('Cédula de ciudadanía'),
        'CE' => $this->t('Cédula de extranjería'),
        'TI' => $this->t('Tarjeta de identidad'),
        'RC' => $this->t('Registro civil'),
        'PEP' => $this->t('Permiso Especial de Permanencia'),

      ],
    ];
    $form['numero_identificacion'] = [
      '#type' => 'number',
      '#title' => $this->t('Número de identificación'),
    ];
    $form['markup'] = [
      '#type' => 'markup',
      '#markup' => '<span>*Deberá diligenciar la información del asegurado que requiera la autorización.</span>',
    ];
    // $form['captcha'] = array(
    //   '#type' => 'captcha',
    //   '#captcha_type' => 'recaptcha/reCAPTCHA',
    // );
    $form['actions'] = ['#type' => 'actions'];
    $form['actions']['submit'] = ['#type' => 'submit', '#value' => $this->t('Ingresar')];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
/*    $uid = $form_state->getValue('numero_identificacion');
    $user = User::load($uid);
    if ($user->hasRole('administrator') == TRUE) {
      $form_state->setErrorByName('numero_identificacion', $this->t('Admin'));
    }
    if (strlen($form_state->getValue('numero_identificacion')) < 3) {
      $form_state->setErrorByName('numero_identificacion', $this->t('The phone number is too short. Please enter a full phone number.'));
    }*/
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $account = user_load_by_name($form_state->getValue('numero_identificacion'));
    if ($account == TRUE) {
      $uid = $account->id();
      if(isset($uid)) {
        $user = User::load($uid);
        if ($user->field_tipo_de_documento->value === $form_state->getValue('tipo_documento')) {
          user_login_finalize($user);
          // $user_destination = \Drupal::destination()->get();
          // $response = new RedirectResponse($user_destination);
          // $url = Url::fromUri('internal:/node/43');
          // $response = new RedirectResponse($url->toString(),301);
          // $response->send();
          $url = Url::fromRoute('entity.node.canonical', ['node' => 43]);
          $form_state->setRedirectUrl($url);
          return;
        }else{
          $this->messenger()->addError($this->t('Si no puede ingresar, comuníquese a la línea Allianz Drummond 018000411115, ó acérquese a los puntos autorizadores en la ciudad de Barranquilla, Santa Marta o Valledupar.', ['@numero_identificacion' => $form_state->getValue('numero_identificacion')]));
        }
      }
    }else{
      $this->messenger()->addError($this->t('Si no puede ingresar, comuníquese a la línea Allianz Drummond 018000411115, ó acérquese a los puntos autorizadores en la ciudad de Barranquilla, Santa Marta o Valledupar.', ['@numero_identificacion' => $form_state->getValue('numero_identificacion')]));
    }
  }
}
