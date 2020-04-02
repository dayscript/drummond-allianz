<?php

namespace Drupal\account_login\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Entity\User;
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
        'TI' => $this->t('Tarjeta de identidad.'),
      ],
    ];
    $form['numero_identificacion'] = [
      '#type' => 'number',
      '#title' => $this->t('Número de identificación'),
    ];
    $form['actions'] = ['#type' => 'actions'];
    $form['actions']['submit'] = ['#type' => 'submit', '#value' => $this->t('Log in')];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if (strlen($form_state->getValue('numero_identificacion')) < 3) {
      $form_state->setErrorByName('numero_identificacion', $this->t('The phone number is too short. Please enter a full phone number.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
$uid=1;

if(isset($uid)) {
  $user = User::load($uid);
  user_login_finalize($user);
  $user_destination = \Drupal::destination()->get();
  $response = new RedirectResponse($user_destination);
  $response->send();
ksm($user);
}
    $this->messenger()->addStatus($this->t('Your phone number is @number', ['@number' => $form_state->getValue('numero_identificacion')]));
  }

}