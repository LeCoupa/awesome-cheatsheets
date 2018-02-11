<?php

/**
 * Class 
 * http://php.net/manual/en/language.oop5.basic.php
 */
class NormalClass extends AbstractClassName implements InterfaceName
{
    use TraitName;

    // Property types

    /**
     * Public property, everyone can access this property. 
     * @var Type
     */
    public $property;

    /**
     * Private property, only this instance can access this property.
     * @var Type
     */
    private $property;

    /**
     * Protected property, this instance and childs can access this property.
     * @var Type
     */
    protected $property;

    /**
     * Static property, is the same for all instances of this class.
     * @var Type
     */
    static $property;

    // Function Types

    /**
     * Public function, everyone can access this function.
     * @param Type
     * @return Type
     */
    public function publicFunction(Type $var = null): Type
    {
        # code...
    }

    /**
     * Private function, only this instance can access this function.
     * @param Type
     * @return Type
     */
    private function privateFunction(Type $var = null): Type
    {
        # code...
    }

    /**
     * Protected function, this instance and childs can access this function.
     * @param Type
     * @return Type
     */
    protected function protectedFunction(Type $var = null): Type
    {
        # code...
    }
    
    /**
     * Static function, doesn't need an instance to be executed.
     * @param Type
     * @return Type
     */
    public static function staticFunction(Type $var = null): Type
    {
        # code...
    }

    // Magic methods

    /**
     * Gets triggered on creating a new class instance
     * http://php.net/manual/en/language.oop5.decon.php
     * @param Type
     * @return void
     */
    public function __construct(Type $var = null)
    {
        # code...
    }

    /**
     * Gets triggered on destruction of a class instance
     * http://php.net/manual/en/language.oop5.decon.php
     * @return void
     */
    public function __destruct()
    {
        # code...
    }

    /**
     * __set() is run when writing data to inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @param mixed value
     * @return void
     */
    public function __set(string $name , mixed $value)
    {
        # code...
    }

    /**
     * __get() is utilized for reading data from inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @return mixed
     */
    public function __get(string $name)
    {
        # code...
    }

    /**
     * __isset() is triggered by calling isset() or empty() on inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @return bool
     */
    public function __isset(string $name)
    {
        # code...
    }

    /**
     * __unset() is invoked when unset() is used on inaccessible properties.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @return void
     */
    public function __unset(string $name)
    {
        # code...
    }

    /**
     * __call is triggered when invoking inaccessible methods in an object context.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @param array arguments
     * @return mixed
     */
    public function __call(string $name, array $arguments)
    {
        # code...
    }

    /**
     * __callStatic() is triggered when invoking inaccessible methods in a static context.
     * http://php.net/manual/en/language.oop5.overloading.php
     * @param string name
     * @param array arguments
     * @return mixed
     */
    public static function __callStatic(string $name, array $arguments)
    {
        # code...
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return array
     */
    public function __sleep()
    {
        # code...
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return void
     */
    public function __wakeup()
    {
        # code...
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return string
     */
    public function __toString()
    {
        # code...
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @param Type
     * @return mixed
     */
    public function __invoke(Type $var = null)
    {
        # code...
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @param array properties
     * @return object
     */
    public static function __set_state(array $properties)
    {
        # code...
    }

    /**
     * http://php.net/manual/en/language.oop5.magic.php
     * @return array
     */
    public function __debugInfo()
    {
        # code...
    }

}

/**
 * Every class that has implemented this interface need to have the same functions.
 */
interface InterfaceName
{

    public function FunctionName(Type $var = null): Type;

}

/**
 * Combination of class and interface.
 */
abstract class AbstractClassName
{

    /**
     * Classes extending this abstract class need to have this function.
     * @param Type
     * @return Type
     */
    abstract function abstractFunction(Type $var = null): Type;

}
