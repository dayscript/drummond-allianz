<?php
/**
 * @file
 * Contains \Drupal\account_login\Plugin\Block\AccountLoginBlock.
 */

namespace Drupal\account_login\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormInterface;

/**
 * Provides a 'account_login' block.
 *
 * @Block(
 *   id = "account_login_block",
 *   admin_label = @Translation("Account Login block"),
 *   category = @Translation("Custom Account Login block")
 * )
 */
class AccountLoginBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $form = \Drupal::formBuilder()->getForm('Drupal\account_login\Form\AccountLoginForm');

    return $form;
   }
}