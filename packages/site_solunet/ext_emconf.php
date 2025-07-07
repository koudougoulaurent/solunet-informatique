<?php

declare(strict_types=1);

$EM_CONF[$_EXTKEY] = [
    'title' => 'SOLUNET INFORMATIQUE - Site Web',
    'description' => 'Extension de site web pour SOLUNET INFORMATIQUE - Votre solution numérique de proximité',
    'category' => 'fe',
    'state' => 'stable',
    'author' => 'SOLUNET INFORMATIQUE',
    'author_email' => 'contact@solunet-informatique.fr',
    'author_company' => 'SOLUNET INFORMATIQUE',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.4.99',
            'fluid_styled_content' => '12.4.0-12.4.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
]; 