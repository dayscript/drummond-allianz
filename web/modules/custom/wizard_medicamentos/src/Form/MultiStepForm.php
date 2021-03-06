<?php

/**
 * @file
 * Contains Drupal\wizard_medicamentos\Form\MultiStepForm.
 */

namespace Drupal\wizard_medicamentos\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class MultiStepForm extends ConfigFormBase
 {

  protected $step = 1;
  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {}

  /**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'multi_step_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);

    $config = $this->config('wizard_medicamentos.multi_step_form_config');

    if($this->step == 1) {
      $form['step_1'] = [
        '#type' => 'fieldset',
        //'#title' => $this->t('Author'),
        //'#open' => TRUE,
        '#prefix' => '<div class="step-1">',
        '#suffix' => '</div>',
      ];
      $form['step_1']['markup'] = [
        '#type' => 'markup',
        '#markup' => '<h2>Medicamentos</h2>',
        '#prefix' => '<div class="title"><span>icono</span>',
        '#suffix' => '</div>',
      ];
      $form['step_1']['markup_1'] = [
        '#type' => 'markup',
        '#markup' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada at sapien placerat vulputate. </p>',
        '#prefix' => '<div class="markup"><span>icono</span>',
        '#suffix' => '</div>',
      ];
      $form['step_1']['markup_2'] = [
        '#type' => 'markup',
        '#markup' => '<p>Duis quis sodales nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet tortor lorem. Nam risus ex, venenatis id consequat eget, commodo pellentesque ligula. </p>',
        '#prefix' => '<div class="markup"><span>icono</span>',
        '#suffix' => '</div>',
      ];
      $form['step_1']['markup_3'] = [
        '#type' => 'markup',
        '#markup' => '<p>Curabitur lectus urna, tempor quis urna ut, sollicitudin aliquam dolor. Curabitur sit amet gravida urna. Suspendisse potenti. Aenean malesuada velit a sapien porttitor hendrerit. Quisque interdum est erat. Maecenas egestas odio et leo rhoncus, sit amet scelerisque justo convallis. </p>',
        '#prefix' => '<div class="markup"><span>icono</span>',
        '#suffix' => '</div>',
      ];
      $form['politicas'] = array(
        '#type' => 'checkbox',
        '#title' => $this->t('Declaro que he leido las políticas de medicamentos'),
      );
    }

    if($this->step == 2) {
      $form['body_style'] = [
        '#type' => 'checkboxes',
        '#title' => $this->t('Body Style'),
        '#description' => $this->t(''),
              '#options' => array('Coupe', 'Sedan', 'Convertible', 'Hatchbac', 'Station wagon', 'SUV', 'Minivan', 'Full-size van', 'Pick-up'),
              '#default_value' => $config->get('body_style'),
      ];
    }

    if($this->step == 3) {
      $form['gas_mileage'] = [
        '#type' => 'radios',
        '#title' => $this->t('Gas Mileage'),
        '#description' => $this->t(''),
              '#options' => array('20 mpg or less', '21 mpg or more', '26 mpg or more', '31 mpg or more', '36 mpg or more', '41 mpg or more'),
              '#default_value' => $config->get('gas_mileage'),
      ];
    }

    if($this->step < 3) {
      $button_label = $this->t('Next');
    }
    else {
      $button_label = $this->t('Find a Car');
    }
    $form['actions']['submit']['#value'] = $button_label;

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    return parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    if($this->step < 3) {
      $form_state->setRebuild();
      $this->step++;
    }
    else {
      parent::submitForm($form, $form_state);

      /*$this->config('multi_step.multi_step_form_config')
            ->set('model', $form_state->getValue('model'))
            ->set('body_style', $form_state->getValue('body_style'))
            ->set('gas_mileage', $form_state->getValue('gas_mileage'))
          ->save();*/
    }
  }
}
